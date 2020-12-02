<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201201111045 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE events_tags (events_id INT NOT NULL, tags_id INT NOT NULL, INDEX IDX_3EC905C9D6A1065 (events_id), INDEX IDX_3EC905C8D7B4FB4 (tags_id), PRIMARY KEY(events_id, tags_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE events_tags ADD CONSTRAINT FK_3EC905C9D6A1065 FOREIGN KEY (events_id) REFERENCES events (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE events_tags ADD CONSTRAINT FK_3EC905C8D7B4FB4 FOREIGN KEY (tags_id) REFERENCES tags (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE comments ADD events_id INT NOT NULL');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A9D6A1065 FOREIGN KEY (events_id) REFERENCES events (id)');
        $this->addSql('CREATE INDEX IDX_5F9E962A9D6A1065 ON comments (events_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE events_tags');
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A9D6A1065');
        $this->addSql('DROP INDEX IDX_5F9E962A9D6A1065 ON comments');
        $this->addSql('ALTER TABLE comments DROP events_id');
    }
}
