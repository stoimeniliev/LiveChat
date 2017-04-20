namespace LiveChat.Server.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Event
    {
        private ICollection<Message> _messages;

        public Event()
        {
            this._messages = new List<Message>();
        }

        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime? StartingOn { get; set; }

        public DateTime? Duration { get; set; }

        public bool IsPrivate { get; set; }

        public Guid UniqueIdentifier { get; set; }

        public virtual ICollection<Message> Messages
        {
            get { return this._messages; }
            set { this._messages = value; }
        }
    }
}
