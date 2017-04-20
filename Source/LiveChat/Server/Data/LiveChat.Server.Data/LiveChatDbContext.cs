namespace LiveChat.Server.Data
{
    using LiveChat.Server.Data.Models;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Data.Entity;
    using System.Data.Entity.ModelConfiguration.Conventions;

    public class LiveChatDbContext : IdentityDbContext<User>, ILiveChatDbContext
    {
        public LiveChatDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static LiveChatDbContext Create()
        {
            return new LiveChatDbContext();
        }

        public virtual IDbSet<Event> Events { get; set; }

        public virtual IDbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}
