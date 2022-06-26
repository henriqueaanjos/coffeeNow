-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "size" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "sale_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "typeCoffeeId" INTEGER NOT NULL,
    "sizeCoffeeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saleId" INTEGER,
    CONSTRAINT "sale_products_typeCoffeeId_fkey" FOREIGN KEY ("typeCoffeeId") REFERENCES "types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sale_products_sizeCoffeeId_fkey" FOREIGN KEY ("sizeCoffeeId") REFERENCES "sizes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sale_products_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
