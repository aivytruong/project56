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

    [HttpGet("CorrectHistory/{item_Number}")]
    public History[] CorrectHistory(string item_Number)
    {
      var correctproduct = from _correctproduct in _context.Historys
                           where _correctproduct.Item_Number == item_Number
                           select _correctproduct;

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

    [HttpGet("CorrectOrder/{order_id}")]
    public History[] CorrectOrder(int order_id)
    {
      var user = from _user in _context.Historys
                 where _user.order_id == order_id
                 select _user;

      return user.ToArray();
    }

    [HttpPost("CreateHistory/{order_id}/{Item_Number}/{user_id}/{amount}/{price}/{date}")]
    public void CreateHistory(int order_id, string Item_Number, int user_id, int amount, string price, string date)
    {
      History newwishlist = new History()
      {
        order_id = order_id,
        Item_Number = Item_Number,
        user_id = user_id,
        amount = amount,
        price = price,
        Date = date
      };
      _context.Historys.Add(newwishlist);
      _context.SaveChanges();
    }

    [HttpPut("Update/{Item_Number}/{user_id}")]
    public void Update(string Item_Number, int user_id)
    {

      History updatewishlist = new History()
      {
        Item_Number = Item_Number,
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