namespace LiveChat.Server.Data
{
    using Microsoft.EntityFrameworkCore;
    using System;
    using Microsoft.EntityFrameworkCore.ChangeTracking;

    public interface ILiveChatDbContext : IDisposable
    {
        //TODO: Add models here : IDbSet<Smth> Name {get;set;}

        DbContext DbContext { get; }

        int SaveChanges();

        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

        DbSet<T> Set<T>() where T : class;
    }
}
