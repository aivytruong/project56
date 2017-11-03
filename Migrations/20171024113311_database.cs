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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "legodetails");
        }
    }
}
