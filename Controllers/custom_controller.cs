using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using project56.model;
using System.IO;


namespace project56.Controllers
{
    [Route("custom")]
    public class custom : Controller
    {
        LegoContext _context;
        public custom(LegoContext context)
        {

            _context = context;
        }

        [HttpPut("Lego")]
        public void FindLegoDb([FromBody]string file)
        {
            string content = file;
            foreach (string line in content.Split("\n").Skip(0))
            {

                var columns = line.Split(",");
                var Item_Number = columns[0];
                var Name = columns[1];
                var Year = columns[2];
                var Theme = columns[3];
                var Subtheme = columns[4];
                var Pieces = columns[5];
                var Minifigures = columns[6];
                var Image_URL = columns[7];
                var GBP_MSRP = columns[8];
                var USD_MSRP = columns[9];
                var CAD_MSRP = columns[10];
                var EUR_MSRP = columns[11];
                var Packaging = columns[12];
                var Availability = columns[13];
                Lego lego = new Lego
                {
                    Item_Number = Item_Number,
                    Name = Name,
                    Year = Year,
                    Theme = Theme,
                    Subtheme = Subtheme,
                    Pieces = Pieces,
                    Minifigures = Minifigures,
                    Image_URL = Image_URL,
                    GBP_MSRP = GBP_MSRP,
                    USD_MSRP = USD_MSRP,
                    CAD_MSRP = CAD_MSRP,
                    EUR_MSRP = EUR_MSRP,
                    Packaging = Packaging,
                    Availability = Availability
                };


                _context.Add(lego);
                _context.SaveChanges();
            }


        }
        [HttpGet("Product")]
        public Lego[] Product()
        {
            return _context.Legos.ToArray();
            // var starwars = (from _starwars in _context.Legos
            //                 let product = _context.Legos.Where(a => a.Item_Number == _starwars.Item_Number).ToList()
            //                 select new Lego(){
            //                     Item_Number=_starwars.Item_Number, Name=_starwars.Name, Year=_starwars.Year, Theme=_starwars.Theme, Subtheme=_starwars.Subtheme, Pieces=_starwars.Pieces, Minifigures=_starwars.Minifigures, Image_URL=_starwars.Image_URL, GBP_MSRP=_starwars.GBP_MSRP,USD_MSRP=_starwars.USD_MSRP,CAD_MSRP=_starwars.CAD_MSRP,EUR_MSRP=_starwars.EUR_MSRP,Packaging=_starwars.Packaging,Availability=_starwars.Availability
            //                 });
            //                 where _starwars.Item_Number == id
            //                 select _starwars).FirstOrDefault();

            
            // return Ok(starwars.ToArray());
        }
    }

}