using System;
using ImageManager.Core;
using ImageManager.Core.Repository;
using ImageManager.DAL.Repositories;
using System.Data.Entity.Validation;

namespace ImageManager.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ImageDBContext _context;
        public IImagesRepository Images { get; private set; }
        public ILocationsRepository Locations { get; private set; }
        public UnitOfWork()
        {
            _context = new ImageDBContext();
            Images = new ImagesRepository(_context);
            Locations = new LocationsRepository(_context);

        }
        
        public int Complete()
        {
            try { 
            return _context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }
        }

        public void Dispose()
        {
             _context.Dispose();
        }
    }
}
