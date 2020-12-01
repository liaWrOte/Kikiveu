<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201201110908 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE users_discussions (users_id INT NOT NULL, discussions_id INT NOT NULL, INDEX IDX_7CC4579167B3B43D (users_id), INDEX IDX_7CC457918DDB4304 (discussions_id), PRIMARY KEY(users_id, discussions_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE users_discussions ADD CONSTRAINT FK_7CC4579167B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_discussions ADD CONSTRAINT FK_7CC457918DDB4304 FOREIGN KEY (discussions_id) REFERENCES discussions (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE comments ADD users_id INT NOT NULL');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A67B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_5F9E962A67B3B43D ON comments (users_id)');
        $this->addSql('ALTER TABLE dogs ADD users_id INT NOT NULL');
        $this->addSql('ALTER TABLE dogs ADD CONSTRAINT FK_353BEEB367B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_353BEEB367B3B43D ON dogs (users_id)');
        $this->addSql('ALTER TABLE events ADD users_id INT NOT NULL');
        $this->addSql('ALTER TABLE events ADD CONSTRAINT FK_5387574A67B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_5387574A67B3B43D ON events (users_id)');
        $this->addSql('ALTER TABLE messages ADD users_id INT NOT NULL');
        $this->addSql('ALTER TABLE messages ADD CONSTRAINT FK_DB021E9667B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_DB021E9667B3B43D ON messages (users_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE users_discussions');
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A67B3B43D');
        $this->addSql('DROP INDEX IDX_5F9E962A67B3B43D ON comments');
        $this->addSql('ALTER TABLE comments DROP users_id');
        $this->addSql('ALTER TABLE dogs DROP FOREIGN KEY FK_353BEEB367B3B43D');
        $this->addSql('DROP INDEX IDX_353BEEB367B3B43D ON dogs');
        $this->addSql('ALTER TABLE dogs DROP users_id');
        $this->addSql('ALTER TABLE events DROP FOREIGN KEY FK_5387574A67B3B43D');
        $this->addSql('DROP INDEX IDX_5387574A67B3B43D ON events');
        $this->addSql('ALTER TABLE events DROP users_id');
        $this->addSql('ALTER TABLE messages DROP FOREIGN KEY FK_DB021E9667B3B43D');
        $this->addSql('DROP INDEX IDX_DB021E9667B3B43D ON messages');
        $this->addSql('ALTER TABLE messages DROP users_id');
    }
}
