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
        
        
        [HttpPost("CreateWishlist/{Item_Number}/{user_id}")]
        public void CreateWishlist(string Item_Number, int user_id)
        {
            Wishlist newwishlist = new Wishlist() {Item_Number = Item_Number,
                                                   user_id = user_id,
                                                   };
            _context.Wishlists.Add(newwishlist);
            _context.SaveChanges();
        }

        [HttpPut("Update/{Item_Number}/{user_id}/")]
        public void Update(string Item_Number, int user_id)
        {
           
            Wishlist updatewishlist = new Wishlist() {Item_Number = Item_Number,
                                                   user_id = user_id
                                                   };
            _context.Update(updatewishlist);
            _context.Entry(updatewishlist);
            _context.SaveChanges();
        }

}
}