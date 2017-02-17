using System;
using System.Collections.Generic;
using System.Linq;
using ImageManager.Core.Repository;
using ImageManager.Models;

namespace ImageManager.DAL.Repositories
{
    public class LocationsRepository:Repository<Location>, ILocationsRepository
    {
        public LocationsRepository(ImageDbContext context) 
            : base(context)
        {
        }

        public IEnumerable<Location> GetSortedLocations()
        {
            return ImageContext.Locations
                 .OrderBy(c => c.LocationName)
                 .ToList();
        }
        public ImageDbContext ImageContext
        {
            get { return Context as ImageDbContext; }
        }
    }
}
