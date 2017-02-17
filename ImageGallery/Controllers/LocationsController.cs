using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ImageManager.Models;
using ImageManager.DAL;

namespace ImageGallery.Controllers
{
    public class LocationsController : ApiController
    {
        private readonly UnitOfWork unitOfWork = new UnitOfWork();
        // GET api/<controller>
        public IEnumerable<Location> Get()
        {
            IEnumerable<Location> locations = unitOfWork.Locations.GetSortedLocations();
            return locations;
        }
        //POST api/<controller>
        public HttpResponseMessage Post(Location item)
        {
            unitOfWork.Locations.Add(item);
            unitOfWork.Complete();
            var response = Request.CreateResponse<Location>(HttpStatusCode.Created, item);

            string uri = Url.Link("DefaultApi", new { id = item.ID });
            response.Headers.Location = new Uri(uri);
            return response;
        }
    }
}
