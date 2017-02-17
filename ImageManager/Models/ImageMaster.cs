using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ImageManager.Models
{
    public class ImageMaster
    {[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ImageID { get; set; }
        [Required]
        [MaxLength(50)]
        public string ImageName { get; set; }
        [Required]
       
        public Byte[] ImageData { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
        public decimal Price { get; set; }
        [Required]
        [MaxLength(50)]
        public string PhotographerName { get; set; }
        [Required]
        [MaxLength(50)]
        public string EmailId { get; set; }
        public Location Location { get; set; }
        public int LocationId { get; set; }

    }
}
