// controllers/userController.js
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Função para criar um novo usuário
export const createUser = async (req, res) => {
  try {
    const {
      store,
      name,
      password,
      admin,
      role,
      cashier,
      initial_screen,
      theme,
      group,
      login_time,
      active,
      menu_tabs,
      token,
      employee_id,
      otp_token,
    } = req.body;

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      store,
      name,
      password: hashedPassword,
      admin,
      role,
      cashier,
      initial_screen,
      theme,
      group,
      login_time,
      active,
      menu_tabs,
      token,
      employee_id,
      otp_token,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para obter todos os usuários
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para obter um usuário específico
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para atualizar um usuário
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, ...otherFields } = req.body;

    // Atualizar a senha apenas se fornecida
    if (password) {
      otherFields.password = await bcrypt.hash(password, 10);
    }

    const [updated] = await User.update(otherFields, { where: { id } });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para deletar um usuário
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
