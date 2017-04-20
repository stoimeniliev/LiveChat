namespace LiveChat.Server.Web
{
    using LiveChat.Server.Data;
    using LiveChat.Server.Data.Migrations;
    using System.Data.Entity;

    public class DatabaseConfig
    {
        public static void Initialize()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<LiveChatDbContext, Configuration>());
            LiveChatDbContext db = LiveChatDbContext.Create();
            db.Database.Initialize(true);
        }
    }
}