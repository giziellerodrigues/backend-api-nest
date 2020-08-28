"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaTable1598485890695 = void 0;
const typeorm_1 = require("typeorm");
class CategoriaTable1598485890695 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categoria',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'descricao',
                    type: 'varchar'
                }
            ]
        }));
    }
    async down(queryRunner) {
    }
}
exports.CategoriaTable1598485890695 = CategoriaTable1598485890695;
//# sourceMappingURL=1598485890695-CategoriaTable.js.map