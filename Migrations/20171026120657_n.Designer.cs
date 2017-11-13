﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using project56.model;
using System;

namespace project56.Migrations
{
    [DbContext(typeof(LegoContext))]
    [Migration("20171026120657_n")]
    partial class n
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452");

            modelBuilder.Entity("project56.model.Lego", b =>
                {
                    b.Property<string>("Item_Number")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Availability");

                    b.Property<string>("CAD_MSRP");

                    b.Property<string>("EUR_MSRP");

                    b.Property<string>("GBP_MSRP");

                    b.Property<string>("Image_URL");

                    b.Property<string>("Minifigures");

                    b.Property<string>("Name");

                    b.Property<string>("Packaging");

                    b.Property<string>("Pieces");

                    b.Property<string>("Subtheme");

                    b.Property<string>("Theme");

                    b.Property<string>("USD_MSRP");

                    b.Property<string>("Year");

                    b.HasKey("Item_Number");

                    b.ToTable("legodetails");
                });
#pragma warning restore 612, 618
        }
    }
}
