using ImageManager.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System;

namespace ImageManager.DAL
{
    public class ImageDBContext:DbContext
    {
        public ImageDBContext()
            : base("name=ImageContext")
        {
            
            Database.SetInitializer(new ImageInitalizeDB());
            this.Configuration.LazyLoadingEnabled = false;
           
        }
        public DbSet<Location> Locations { get; set; }
        public DbSet<ImageMaster> ImageMaster { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
       
    }
}
