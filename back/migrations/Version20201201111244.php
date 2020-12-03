<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201201111244 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dogs ADD mood_id INT DEFAULT NULL, ADD temperament_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dogs ADD CONSTRAINT FK_353BEEB3B889D33E FOREIGN KEY (mood_id) REFERENCES moods (id)');
        $this->addSql('ALTER TABLE dogs ADD CONSTRAINT FK_353BEEB365A6C68A FOREIGN KEY (temperament_id) REFERENCES temperaments (id)');
        $this->addSql('CREATE INDEX IDX_353BEEB3B889D33E ON dogs (mood_id)');
        $this->addSql('CREATE INDEX IDX_353BEEB365A6C68A ON dogs (temperament_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dogs DROP FOREIGN KEY FK_353BEEB3B889D33E');
        $this->addSql('ALTER TABLE dogs DROP FOREIGN KEY FK_353BEEB365A6C68A');
        $this->addSql('DROP INDEX IDX_353BEEB3B889D33E ON dogs');
        $this->addSql('DROP INDEX IDX_353BEEB365A6C68A ON dogs');
        $this->addSql('ALTER TABLE dogs DROP mood_id, DROP temperament_id');
    }
}
