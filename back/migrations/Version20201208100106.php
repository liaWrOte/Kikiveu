<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201208100106 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dogs ADD state_id INT NOT NULL');
        $this->addSql('ALTER TABLE dogs ADD CONSTRAINT FK_353BEEB35D83CC1 FOREIGN KEY (state_id) REFERENCES states (id)');
        $this->addSql('CREATE INDEX IDX_353BEEB35D83CC1 ON dogs (state_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dogs DROP FOREIGN KEY FK_353BEEB35D83CC1');
        $this->addSql('DROP INDEX IDX_353BEEB35D83CC1 ON dogs');
        $this->addSql('ALTER TABLE dogs DROP state_id');
    }
}
