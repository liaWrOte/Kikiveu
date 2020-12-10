<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201210130118 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE users ADD user_lat DOUBLE PRECISION DEFAULT NULL, ADD user_long DOUBLE PRECISION DEFAULT NULL, ADD sw_lat DOUBLE PRECISION DEFAULT NULL, ADD sw_long DOUBLE PRECISION DEFAULT NULL, ADD ne_lat DOUBLE PRECISION DEFAULT NULL, ADD ne_long DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE users DROP user_lat, DROP user_long, DROP sw_lat, DROP sw_long, DROP ne_lat, DROP ne_long');
    }
}
