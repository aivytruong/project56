using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace project56.Migrations
{
    public partial class database : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admindetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    Username = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admindetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "legodetails",
                columns: table => new
                {
                    Item_Number = table.Column<string>(type: "text", nullable: false),
                    Availability = table.Column<string>(type: "text", nullable: true),
                    CAD_MSRP = table.Column<string>(type: "text", nullable: true),
                    EUR_MSRP = table.Column<string>(type: "text", nullable: true),
                    GBP_MSRP = table.Column<string>(type: "text", nullable: true),
                    Image_URL = table.Column<string>(type: "text", nullable: true),
                    Minifigures = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Packaging = table.Column<string>(type: "text", nullable: true),
                    Pieces = table.Column<string>(type: "text", nullable: true),
                    Subtheme = table.Column<string>(type: "text", nullable: true),
                    Theme = table.Column<string>(type: "text", nullable: true),
                    USD_MSRP = table.Column<string>(type: "text", nullable: true),
                    Year = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_legodetails", x => x.Item_Number);
                });

            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Adress = table.Column<string>(type: "text", nullable: true),
                    EmailAdress = table.Column<string>(type: "text", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    Gender = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    UserName = table.Column<string>(type: "text", nullable: true),
                    country = table.Column<string>(type: "text", nullable: true),
                    date_of_birth = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "wishlistdetails",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Item_Number = table.Column<string>(type: "text", nullable: true),
                    user_id = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_wishlistdetails", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admindetails");

            migrationBuilder.DropTable(
                name: "legodetails");

            migrationBuilder.DropTable(
                name: "UserDetails");

            migrationBuilder.DropTable(
                name: "wishlistdetails");
        }
    }
}
