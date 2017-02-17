using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ImageManager.Models;

namespace ImageManager.Core.Repository
{
   public interface IImagesRepository:IRepository<ImageMaster>
    {
        IEnumerable<ImageMaster>GetImages(int pageIndex, int pageSize);
        
    }


}
