using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace APIBookstore.Models.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        [Column(TypeName = "varchar(500)")]
        public string Synopsis { get; set; }
        public string Publisher { get; set; }
        public string Category { get; set; }
        public string Season { get; set; }
        public string Year { get; set; }
        public string Img { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
