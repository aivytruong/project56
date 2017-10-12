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
        public int Item_Number { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Theme { get; set; }
        public string Subtheme { get; set; }
        public int Pieces { get; set; }
        public int Minifigures { get; set; }
        public string Image_URL { get; set; }
        public int GB_MSRP { get; set; }
        public int USD_MSRP { get; set; }
        public int EUR_MSRP { get; set; }
        public string Packaging { get; set; }
        public int Availability { get; set; }
    }

    
}