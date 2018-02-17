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
    [Route("HistoryController")]
    public class HistoryController : Controller 
    {
        private readonly LegoContext _context;

        public HistoryController(LegoContext context) 
        {
            _context = context;
        }
    

        [HttpGet("History")]
        public History[] History() 
        {
            return _context.Historys.ToArray();
        }

        [HttpGet("CorrectUser/{user_id}")]
        public History[] CorrectUser(int user_id)
        {
            var user = from _user in _context.Historys
                           where _user.user_id == user_id
                           select _user;
                           
            return user.ToArray();  
        }
        
        
        [HttpPost("CreateHistory/{Item_Number}/{user_id}/{amount}/{price}/{totalprice}/{date}")]
        public void CreateHistory(string Item_Number, int user_id, int amount, string price, string totalprice, string date)
        {
            History newwishlist = new History() {Item_Number = Item_Number,
                                                   user_id = user_id,
                                                   amount = amount,
                                                   price = price,
                                                   totalprice = totalprice,
                                                   Date = date
                                                   };
            _context.Historys.Add(newwishlist);
            _context.SaveChanges();
        }

        [HttpPut("Update/{Item_Number}/{user_id}")]
        public void Update(string Item_Number, int user_id)
        {
           
            History updatewishlist = new History() {Item_Number = Item_Number,
                                                   user_id = user_id
                                                   };
            _context.Update(updatewishlist);
            _context.Entry(updatewishlist);
            _context.SaveChanges();
        }

        [HttpDelete("Delete/{user_id}/{Item_Number}")]
        public void Delete(int user_id, string Item_Number)
        {
            var user = from _user in _context.Historys
                       where _user.user_id == user_id && _user.Item_Number == Item_Number
                       select _user;
            _context.Historys.Remove(user.FirstOrDefault());
            _context.SaveChanges();                     
        }

    }
}