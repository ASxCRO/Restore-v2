using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(StoreContext dbContext) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetList(){
            return await dbContext.Products.ToListAsync();
        }

        [HttpGet("{id}")]
         public async Task<ActionResult<Product>> GetById(int id){
            var product = await dbContext.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }
    }
}
