using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using LiveChat.Server.Web.Models;

namespace LiveChat.Server.Web.Data
{
    public class LiveChatDbContext : IdentityDbContext<User>
    {
        public LiveChatDbContext(DbContextOptions<LiveChatDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
