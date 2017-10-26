using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace project56.model
{
 public class LegoContext : DbContext
    {

        public DbSet<Lego> Legos { get; set; }
        

        //Added constructor to provide the connection to the database as a service (look at: startup.cs)
        public LegoContext(DbContextOptions<LegoContext> options): base(options)
        {
        }

        
}
    [Table("legodetails")]
    public class Lego {
        [Key]
        public string Item_Number { get; set; }
        public string Name { get; set; }
        public string Year { get; set; }
        public string Theme { get; set; }
        public string Subtheme { get; set; }
        public string Pieces { get; set; }
        public string Minifigures { get; set; }
        public string Image_URL { get; set; }
        public string GBP_MSRP { get; set; }
        public string USD_MSRP { get; set; }
        public string CAD_MSRP{get;set;}
        public string EUR_MSRP { get; set; }
        public string Packaging { get; set; }
        public string Availability { get; set; }
    }

    [Table("userdetails")]
    
    public class Users {
        public string User_id { get; set; }
        public string Gebruikersnaam { get; set; }
        public string Wachtwoord { get; set; }
        public string Geboortedatum { get; set; }
        public string Emailadres { get; set; }
        public string Adres { get; set; }
        public string geslacht { get; set; }
    }

}