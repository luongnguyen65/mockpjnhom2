package com.vti.service;

import com.vti.entity.User;
import com.vti.filter.UserFilter;
import com.vti.form.CreatingUserForm;
import com.vti.repository.IUserRepository;
import com.vti.specification.UserSpecification;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Page<User> getAllUsers(Pageable pageable, UserFilter form) {
        Specification<User> specification = UserSpecification.buildWhere(form);
        return userRepository.findAll(specification, pageable);
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void createUser(CreatingUserForm form) {
        TypeMap typeMap = modelMapper.getTypeMap(CreatingUserForm.class, User.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingUserForm, User>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
            User user = modelMapper.map(form, User.class);
            userRepository.save(user);

        }
    }
}
