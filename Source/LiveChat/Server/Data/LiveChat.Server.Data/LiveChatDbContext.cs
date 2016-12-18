namespace LiveChat.Server.Data
{
    using LiveChat.Server.Common.Constants;
    using LiveChat.Server.Web.Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Infrastructure.Internal;

    public class LiveChatDbContext : IdentityDbContext<User>, ILiveChatDbContext
    {
        private DbContextOptions options;

        public LiveChatDbContext(DbContextOptions<LiveChatDbContext> options)
            : base(options)
        {
            this.options = options;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var sqlServerOptions = options.GetExtension<SqlServerOptionsExtension>();
            optionsBuilder.UseSqlServer(sqlServerOptions.ConnectionString, b => b.MigrationsAssembly(AssemblyConstants.LiveChatWeb));
        }

        public DbContext DbContext
        {
            get { return this; }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        //TODO: Add all tables here - public virtual DbSet<TableName> Name {get;set;}
    }
}
