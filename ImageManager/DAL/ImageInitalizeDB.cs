using ImageManager.Models;
using System.Data.Entity;

namespace ImageManager.DAL
{
    public class ImageInitalizeDb: DropCreateDatabaseIfModelChanges<ImageDbContext>
    {
         
        protected override void Seed(ImageDbContext context)
        {
            context.Locations.Add(new Location {LocationName="Austin" });
            context.Locations.Add(new Location { LocationName = "Dallas" });
            context.Locations.Add(new Location { LocationName = "Newyork" });
            context.Locations.Add(new Location { LocationName = "Los angeles" });
            context.Locations.Add(new Location { LocationName = "New jersey" });
            context.Locations.Add(new Location { LocationName = "Washington dc" });
            context.Locations.Add(new Location { LocationName = "San Francisco" });
            context.Locations.Add(new Location { LocationName = "Colorado" });
            context.SaveChanges(); base.Seed(context);
        }
    
}
}

