using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ImageManager.Models;
using ImageManager.DAL;
using ImageGallery.Helper;

namespace ImageGallery.Controllers
{
    public class ImagesController : ApiController
    {
        private readonly UnitOfWork unitOfWork = new UnitOfWork();
        #region Get Verbs

        //// GET api/<controller>
        //public IEnumerable<ImageMaster> Get()
        //{
        //    IEnumerable<ImageMaster> images = unitOfWork.Images.GetAll();
        //    return images;
        //}
        [HttpGet]

        public IHttpActionResult Get(int page , int pageSize )
        {
            int currentPage = page;
            int currentPageSize = pageSize;
            
                int totalCount = unitOfWork.Images.GetAll().Count();
                int totalPages = (int)(Math.Ceiling((decimal)totalCount / currentPageSize));

                var images = unitOfWork.Images.GetImages(currentPage, currentPageSize);

                PaginatedImage pagedSet = new PaginatedImage()
                {
                    Page = currentPage,
                    TotalCount = totalCount,
                    TotalPages = totalPages,
                    Items = images
                };

            return Ok(pagedSet);
            
                
        }

        [Route("api/Images/details/{id}")]
        [HttpGet]
        public ImageMaster ImageData(int id)
        {
            ImageMaster image = unitOfWork.Images.Get(id);
            if (image == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return image;
            
        }
        #endregion
        #region POST Verbs
        //POST api/<controller>

        [HttpPost]
        public HttpResponseMessage Post(ImageMaster item)
        {
            unitOfWork.Images.Add(item);
            unitOfWork.Complete();
            var response = Request.CreateResponse<ImageMaster>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { id = item.ImageID });
            response.Headers.Location = new Uri(uri);
            return response;
        }
        #endregion

        #region PUT Verbs
        public void Put( ImageMaster image)
        {
            int id = image.ImageID ;

            var query = unitOfWork.Images.Find(s => s.ImageID == id);
            foreach (var item in query)
            {
                item.ImageName = image.ImageName;
                item.PhotographerName = image.PhotographerName;
                item.Price = image.Price;
                item.EmailId = image.EmailId;
            }

            unitOfWork.Complete();
        }

        #endregion

        #region Delete Verbs
        public void DeleteImage(int id)
        {
            ImageMaster item = unitOfWork.Images.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            unitOfWork.Images.Remove(item);
            unitOfWork.Complete();
        }
        #endregion
    }
}