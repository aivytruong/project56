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
    public class UsercController : Controller
    {
        private readonly LegoContext _context;

        public UsercController(LegoContext context)
        {
            _context = context;
        }

        // GET: Userc
        public async Task<IActionResult> Index()
        {
            return View(await _context.Users.ToListAsync());
        }

        // GET: Userc/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var classUser = await _context.Users
                .SingleOrDefaultAsync(m => m.ID == id);
            if (classUser == null)
            {
                return NotFound();
            }

            return View(classUser);
        }

        // GET: Userc/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Userc/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,FirstName,LastName,UserName,EmailAdress,Password,Adress,PhoneNumber,country,date_of_birth,Gender")] ClassUser classUser)
        {
            if (ModelState.IsValid)
            {
                _context.Add(classUser);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(classUser);
        }

        // GET: Userc/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var classUser = await _context.Users.SingleOrDefaultAsync(m => m.ID == id);
            if (classUser == null)
            {
                return NotFound();
            }
            return View(classUser);
        }

        // POST: Userc/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,FirstName,LastName,UserName,EmailAdress,Password,Adress,PhoneNumber,country,date_of_birth,Gender")] ClassUser classUser)
        {
            if (id != classUser.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(classUser);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ClassUserExists(classUser.ID))
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
            return View(classUser);
        }

        // GET: Userc/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var classUser = await _context.Users
                .SingleOrDefaultAsync(m => m.ID == id);
            if (classUser == null)
            {
                return NotFound();
            }

            return View(classUser);
        }

        // POST: Userc/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var classUser = await _context.Users.SingleOrDefaultAsync(m => m.ID == id);
            _context.Users.Remove(classUser);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ClassUserExists(int id)
        {
            return _context.Users.Any(e => e.ID == id);
        }
    }
}
