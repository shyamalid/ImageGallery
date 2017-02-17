using ImageManager.Models;
using System.Collections.Generic;

namespace ImageManager.Core.Repository
{
    public interface ILocationsRepository:IRepository<Location>
    {
        IEnumerable<Location> GetSortedLocations();

    }
}
