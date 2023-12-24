import prismadb from "@/lib/prismadb";

import { SubCategoryForm } from "./components/subcategory-form";

const CategoryPage = async ({ params }: { params: { subcategoryId: string; storeId: string } }) => {
  const subcategory = await prismadb.subCategory.findUnique({
    where: {
      id: params.subcategoryId,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SubCategoryForm categories={categories} initialData={subcategory} />
      </div>
    </div>
  );
};

export default CategoryPage;
