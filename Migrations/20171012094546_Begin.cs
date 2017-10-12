using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace project56.Migrations
{
    public partial class Begin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "legodetails",
                columns: table => new
                {
                    Item_Number = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Availability = table.Column<int>(type: "int4", nullable: false),
                    EUR_MSRP = table.Column<int>(type: "int4", nullable: false),
                    GB_MSRP = table.Column<int>(type: "int4", nullable: false),
                    Image_URL = table.Column<string>(type: "text", nullable: true),
                    Minifigures = table.Column<int>(type: "int4", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Packaging = table.Column<string>(type: "text", nullable: true),
                    Pieces = table.Column<int>(type: "int4", nullable: false),
                    Subtheme = table.Column<string>(type: "text", nullable: true),
                    Theme = table.Column<string>(type: "text", nullable: true),
                    USD_MSRP = table.Column<int>(type: "int4", nullable: false),
                    Year = table.Column<int>(type: "int4", nullable: false)
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
