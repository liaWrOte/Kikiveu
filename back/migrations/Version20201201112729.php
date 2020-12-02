<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201201112729 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE messages ADD discussion_id INT NOT NULL');
        $this->addSql('ALTER TABLE messages ADD CONSTRAINT FK_DB021E961ADED311 FOREIGN KEY (discussion_id) REFERENCES discussions (id)');
        $this->addSql('CREATE INDEX IDX_DB021E961ADED311 ON messages (discussion_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE messages DROP FOREIGN KEY FK_DB021E961ADED311');
        $this->addSql('DROP INDEX IDX_DB021E961ADED311 ON messages');
        $this->addSql('ALTER TABLE messages DROP discussion_id');
    }
}
