-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 07 juil. 2017 à 12:49
-- Version du serveur :  5.7.18-log
-- Version de PHP :  7.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dariabeatsjesus`
--
CREATE DATABASE IF NOT EXISTS `dariabeatsjesus` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dariabeatsjesus`;

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `titre` varchar(150) NOT NULL,
  `html` text NOT NULL,
  `slug` varchar(150) NOT NULL,
  `cover` varchar(250) DEFAULT NULL,
  `color` varchar(20) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `titre`, `html`, `slug`, `cover`, `color`, `category_id`, `created_at`, `updated_at`) VALUES
(34, 'First Article : Love To Hate Yourself', '<p><strong>UNTIE THAT NOSE AND LAUGH ALONG WITH ME.</strong></p>', 'First-Article-:-Love-To-Hate-Yourself', 'http://localhost:8080/uploads/shoe0nhead.jpg', 'rgba(202,32,32,1)', 4, '2017-07-06 00:03:28', '2017-07-06 00:03:28'),
(35, '\"Fresh fruits in prison is usually chicken\"', '<p>\"OH MY GOD HES DYIIIIING\"</p>', '\"Fresh-fruits-in-prison-usually-taste-like-chicken\"', 'http://localhost:8080/uploads/house.jpg', 'rgba(22,54,105,1)', 4, '2017-07-06 01:18:09', '2017-07-06 01:18:09'),
(36, 'Angular, c\'est cool (mais $scope ma tuer)', '<p>$scope $scope $scope</p>', 'Angular-c\'est-cool-(mais-dollarscope-ma-tuer)', 'http://localhost:8080/uploads/angular.jpg', 'rgba(215,32,32,0.79)', 16, '2017-07-06 11:28:44', '2017-07-06 11:28:44');

-- --------------------------------------------------------

--
-- Structure de la table `articles_tags`
--

DROP TABLE IF EXISTS `articles_tags`;
CREATE TABLE `articles_tags` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles_tags`
--

INSERT INTO `articles_tags` (`id`, `article_id`, `tag_id`) VALUES
(5, 17, 9),
(4, 17, 8),
(3, 16, 2),
(15, 33, 8),
(13, 28, 3),
(12, 27, 2),
(14, 30, 2),
(16, 36, 17);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(17, 'Dessin'),
(4, 'Skepticism'),
(5, 'Jeux videos'),
(33, 'test'),
(16, 'Dev');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `author` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `article_id` int(11) NOT NULL,
  `is_read` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `author`, `content`, `article_id`, `is_read`, `created_at`, `updated_at`) VALUES
(1, 'Daria', 'This is a comment', 12, 1, '2017-06-30 17:00:00', '2017-06-30 19:09:52'),
(2, 'Dr.House', 'Ceci est un deuxieme comment non lu.', 12, 1, '2017-06-30 18:30:00', '2017-06-30 19:09:53');

-- --------------------------------------------------------

--
-- Structure de la table `drafts`
--

DROP TABLE IF EXISTS `drafts`;
CREATE TABLE `drafts` (
  `id` int(11) NOT NULL,
  `title` varchar(150) DEFAULT NULL,
  `html` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `path` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `name`, `path`, `created_at`, `updated_at`) VALUES
(5, 'house.jpg', 'http://localhost:8080/uploads/house.jpg', '2017-07-03 17:43:49', '2017-07-03 17:43:49'),
(6, 'Daria_Morgendorffer.png', 'http://localhost:8080/uploads/Daria_Morgendorffer.png', '2017-07-03 17:45:23', '2017-07-03 17:45:23'),
(8, 'shoe0nhead.jpg', 'http://localhost:8080/uploads/shoe0nhead.jpg', '2017-07-04 23:17:26', '2017-07-04 23:17:26'),
(16, 'angular.jpg', 'http://localhost:8080/uploads/angular.jpg', '2017-07-06 11:26:59', '2017-07-06 11:26:59');

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `slug` varchar(150) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tags`
--

INSERT INTO `tags` (`id`, `name`, `slug`) VALUES
(1, 'développement', 'developpement'),
(2, 'javascript', 'javascript'),
(3, 'jeux videos', 'jeux-videos'),
(9, ' Chris Ray Gun', 'Chris-Ray-Gun'),
(8, 'shoe0nhead', 'shoe0nhead'),
(16, 'test', 'test'),
(17, 'angular', 'angular');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `articles_tags`
--
ALTER TABLE `articles_tags`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `drafts`
--
ALTER TABLE `drafts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT pour la table `articles_tags`
--
ALTER TABLE `articles_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `drafts`
--
ALTER TABLE `drafts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
