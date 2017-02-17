using System;
using System.Collections.Generic;
using System.Linq;
using ImageManager.Core.Repository;
using ImageManager.Models;

namespace ImageManager.DAL.Repositories
{
    public class ImagesRepository:Repository<ImageMaster> ,IImagesRepository
    {
        public ImagesRepository(ImageDbContext context) 
            : base(context)
        {
        }

        public IEnumerable<ImageMaster> GetImages(int pageIndex, int pageSize)
        {
           
            return ImageContext.ImageMaster
                .OrderBy(c => c.ImageName)
                .Skip((pageIndex) * pageSize)
                .Take(pageSize)
                .ToList();
            
        }

       

        public ImageDbContext ImageContext
        {
            get { return Context as ImageDbContext; }
        }
    }
}
