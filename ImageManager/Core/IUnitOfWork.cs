using System;
using ImageManager.Core.Repository;

namespace ImageManager.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IImagesRepository Images{get;}
        ILocationsRepository Locations { get; }
        int Complete();
    }
}
