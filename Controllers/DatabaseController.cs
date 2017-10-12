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
    public class DatabaseController : Controller
    {
        private readonly LegoContext _context;

        public DatabaseController(LegoContext context)
        {
            _context = context;
        }

        // GET: Database
        public async Task<IActionResult> Index()
        {
            return View(await _context.Legos.ToListAsync());
        }

        // GET: Database/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lego = await _context.Legos
                .SingleOrDefaultAsync(m => m.Item_Number == id);
            if (lego == null)
            {
                return NotFound();
            }

            return View(lego);
        }

        // GET: Database/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Database/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Item_Number,Name,Year,Theme,Subtheme,Pieces,Minifigures,Image_URL,GB_MSRP,USD_MSRP,EUR_MSRP,Packaging,Availability")] Lego lego)
        {
            if (ModelState.IsValid)
            {
                _context.Add(lego);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(lego);
        }

        // GET: Database/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lego = await _context.Legos.SingleOrDefaultAsync(m => m.Item_Number == id);
            if (lego == null)
            {
                return NotFound();
            }
            return View(lego);
        }

        // POST: Database/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Item_Number,Name,Year,Theme,Subtheme,Pieces,Minifigures,Image_URL,GB_MSRP,USD_MSRP,EUR_MSRP,Packaging,Availability")] Lego lego)
        {
            if (id != lego.Item_Number)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(lego);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!LegoExists(lego.Item_Number))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(lego);
        }

        // GET: Database/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lego = await _context.Legos
                .SingleOrDefaultAsync(m => m.Item_Number == id);
            if (lego == null)
            {
                return NotFound();
            }

            return View(lego);
        }

        // POST: Database/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var lego = await _context.Legos.SingleOrDefaultAsync(m => m.Item_Number == id);
            _context.Legos.Remove(lego);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool LegoExists(int id)
        {
            return _context.Legos.Any(e => e.Item_Number == id);
        }
    }
}
