-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "stock_in_transit" INTEGER,
    "sales_last_7" INTEGER NOT NULL,
    "sales_last_30" INTEGER NOT NULL,
    "last_restock_date" DATETIME,
    "cost_price" REAL NOT NULL,
    "sale_price" REAL NOT NULL,
    "margin" REAL,
    "threshold" INTEGER NOT NULL,
    "is_strategic" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
