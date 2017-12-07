using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using project56.model;

namespace project56.Controllers
{
    [Route("WishlistController")]
    public class WishlistController : Controller 
    {
        private readonly LegoContext _context;

        public WishlistController(LegoContext context) 
        {
            _context = context;
        }

        [HttpGet("Wishlist")]
        public Wishlist[] allWishlist() 
        {
            return _context.Wishlists.ToArray();
        }
        
        
        [HttpPost("CreateWishlist/{Item_Number}/{Name}/{Image_URL}/{EUR_MSRP}/{ID}/{UserName}/{Password}")]
        public void CreateWishlist(string Item_Number, string Name, string Image_URL, string EUR_MSRP, int ID, string UserName, string Password)
        {
            Wishlist newwishlist = new Wishlist() {Item_Number = Item_Number,
                                                   Name = Name,
                                                   Image_URL = Image_URL,
                                                   EUR_MSRP = EUR_MSRP, 
                                                   ID = ID,
                                                   UserName = UserName,
                                                   Password = Password
                                                   };
            _context.Wishlists.Add(newwishlist);
            _context.SaveChanges();
        }

        [HttpPut("Update/{Item_Number}/{ID}/")]
        public void Update(string Item_Number, int ID)
        {
           
            Wishlist updatewishlist = new Wishlist() {Item_Number = Item_Number,
                                                   ID = ID
                                                   };
            _context.Update(updatewishlist);
            _context.Entry(updatewishlist);
            _context.SaveChanges();
        }

}
}