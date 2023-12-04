package com.vti.service;

import com.vti.entity.Category;
import com.vti.form.CreatingCategoryForm;
import com.vti.form.UpdatingCategoryForm;
import java.util.List;

public interface ICategoryService {
    List<Category> getAllCategory();

    void createCategory(CreatingCategoryForm form);

    void updateCategory(UpdatingCategoryForm form);

    void deleteCategory(int id);

    Category getCategoryById(int id);

    boolean isCategoryExistsByName(String name);
}
