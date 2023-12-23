using APIBookstore.Models.Context;
using APIBookstore.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIBookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class bookstoreController : ControllerBase
    {
        private readonly MySqlContext _context;

        public bookstoreController(MySqlContext context)
        {
            _context = context;

            //mockar os dados
            foreach (Product x in _context.Products)
            {
                _context.Products.Remove(x);
            }
            _context.SaveChanges();

            _context.Products.Add(new Product { Id = 1, Title = "Sherlock Holmes: Obra completa", Author = "Arthur Conan Doyle", Synopsis = "Esta obra completa reúne os quatro romances e os 56 contos sobre as aventuras do detetive mais famoso do mundo", Publisher = "HarperCollins Brasil", Category = "Mistério", Season = "Obra Completa", Year = "2015", Img = "img1", Price = 89.94M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 2, Title = "O MUNDO DE SOFIA", Author = "Jostein Gaarder", Synopsis = "Às vésperas de seu aniversário de quinze anos", Publisher = "Seguinte", Category = "Romance", Season = "Primeira Edição", Year = "2012", Img = "img2", Price = 52.43M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 3, Title = "Arsène Lupin, o ladrão de casaca", Author = "Maurice Leblanc", Synopsis = "Arsène Lupin, personagem vivo, audacioso, impertinente, desafiando sem cessar o Inspetor Ganimard...", Publisher = "Pandorga Editora", Category = "Ficção", Season = "TodasTemporadas", Year = "2021", Img = "img3", Price = 44.44M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 4, Title = "INTRODUÇÃO À PROGRAMAÇÃO", Author = "Anita Lopes", Synopsis = "INTRODUÇÃO À PROGRAMAÇÃO 500 Algoritmos Resolvidos", Publisher = "GEN LTC", Category = "Lógica de Programação", Season = "Cd", Year = "2002", Img = "img4", Price = 170.00M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 5, Title = "Guia Front-End", Author = "Diego ES", Synopsis = "Guia Front-End", Publisher = "Casa do Código | Alura", Category = "Programação Front-End", Season = "Primeira", Year = "2008", Img = "img5", Price = 115.15M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 6, Title = "Aprenda a Programar com C#", Author = "António Trigo", Synopsis = "Aprenda a Programar com C#", Publisher = "Edições Sílabo", Category = "Programação Back-End", Season = "Segunda Edição", Year = "2002", Img = "img6", Price = 99.99M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 7, Title = "Use a Cabeça! C#", Author = "Andrew Stellman", Synopsis = "Um guia de aprendizagem para programação no mundo real com C# e .NET", Publisher = "Alta Books", Category = "Programação Back-end", Season = "Segunda Edição", Year = "2010", Img = "img7", Price = 100.94M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 8, Title = "Introdução à linguagem SQL", Author = "Tomas Nield", Synopsis = "Abordagem prática para iniciantes", Publisher = "novatec", Category = "SQL Básico", Season = "Primeira Edição", Year = "2005", Img = "img8", Price = 149.90M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 9, Title = "MySQL Aprendendo na Prática", Author = "Sérgio Luiz Tonsig", Synopsis = "MySQL Aprendendo na Prática", Publisher = "Ciência Moderna", Category = "SQL", Season = "Primeira Edição", Year = "2003", Img = "img9", Price = 188.80M, Quantity = 10 });
            _context.Products.Add(new Product { Id = 10, Title = "O PODER DO HÁBITO", Author = "Charles Duhigg", Synopsis = "Por que fazemos o que fazemos na vida e nos negócios", Publisher = "OBIETINA", Category = "AutoAjuda", Season = "Primeira Edição", Year = "2015", Img = "img10", Price = 50.00M, Quantity = 10 });
            
            _context.SaveChanges();
        }

        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProdut), new { id = product.Id }, product);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProdut(int id)
        {
            var productDb = await _context.Products.FindAsync(id.ToString());

            if (productDb == null)
            {
                return NotFound();
            }

            return productDb;
        }
    }
}
