-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 15-Out-2021 às 18:28
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `teste_troupe`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `rua` varchar(200) NOT NULL,
  `numero` int(7) NOT NULL,
  `complemento` varchar(50) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `zip` varchar(15) NOT NULL,
  `ativo` varchar(10) NOT NULL,
  `cpf` varchar(30) NOT NULL,
  `rg` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `telefone`, `rua`, `numero`, `complemento`, `bairro`, `cidade`, `estado`, `zip`, `ativo`, `cpf`, `rg`, `email`) VALUES
(19, 'zoraide', '77777', 'Rua Alfeu Schimidt', 4, '', 'Planalto do Sol II', 'Santa Bárbara DOeste', 'Sao Paulo', '13453833', 'sim', '777777777', '77777777', 'email@email.com'),
(18, 'amanda', '8888888', 'Rua Alfeu Schimidt', 5, '', 'Planalto do Sol II', 'Santa Bárbara DOeste', 'Sao Paulo', '13453833', 'sim', '88888', '8888888', 'email@email.com'),
(17, 'bruno', '9999999', 'Rua Alfeu Schimidt', 3, '', 'Planalto do Sol II', 'Santa Bárbara DOeste', 'Sao Paulo', '13453833', 'sim', '99999999999', '9999999999', 'email@email.com'),
(16, 'renan', '19971182303', 'Rua Alfeu Schimidt', 3, '', 'Planalto do Sol II', 'Santa Bárbara DOeste', 'Sao Paulo', '13453833', 'sim', '40701793805', '497745410', 'rtonarque@gmail.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
