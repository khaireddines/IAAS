<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('display_name');
            $table->string('name');
            $table->timestamps();
        });
        Schema::table('users',function (Blueprint $table){
            $table->foreignId('role_id')->after('id')->default(2)->constrained('roles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users',function (Blueprint $table){
                $table->dropForeign(['role_id']);
        });
        Schema::dropIfExists('roles');
    }
}
