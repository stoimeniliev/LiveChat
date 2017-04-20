namespace LiveChat.Server.Data.Models
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Collections.Generic;
    using System.Security.Claims;
    using System.Threading.Tasks;

    public class User : IdentityUser
    {
        private ICollection<Message> _messages;
        private ICollection<Event> _events;

        public User()
        {
            this._messages = new List<Message>();
            this._events = new List<Event>();
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string OrganizationName { get; set; }

        public bool IsOrganizer { get; set; }

        public virtual ICollection<Event> Events
        {
            get { return this._events; }
            set { this._events = value; }
        }

        public virtual ICollection<Message> Messages
        {
            get { return this._messages; }
            set { this._messages = value; }
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<User> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }
}
