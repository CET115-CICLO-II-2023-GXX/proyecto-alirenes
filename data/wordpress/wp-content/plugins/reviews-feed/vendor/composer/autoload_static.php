<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita87b441ef0ec09de95e76d0b1f524cff
{
    public static $files = array (
        'sb_rf_b33e3d135e5d9e47d845c576147bda89' => __DIR__ . '/..' . '/php-di/php-di/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Smashballoon\\Stubs\\' => 19,
            'Smashballoon\\Customizer\\V2\\' => 27,
            'SmashBalloon\\Reviews\\Vendor\\SuperClosure\\' => 41,
            'SmashBalloon\\Reviews\\Vendor\\Psr\\Container\\' => 42,
            'SmashBalloon\\Reviews\\Vendor\\PhpParser\\' => 38,
            'SmashBalloon\\Reviews\\Vendor\\PhpDocReader\\' => 41,
            'SmashBalloon\\Reviews\\Vendor\\Invoker\\' => 36,
            'SmashBalloon\\Reviews\\Vendor\\DI\\' => 31,
            'SmashBalloon\\Reviews\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Smashballoon\\Stubs\\' => 
        array (
            0 => __DIR__ . '/..' . '/smashballoon/stubs/src',
        ),
        'Smashballoon\\Customizer\\V2\\' => 
        array (
            0 => __DIR__ . '/..' . '/smashballoon/customizer/app/V2',
        ),
        'SmashBalloon\\Reviews\\Vendor\\SuperClosure\\' => 
        array (
            0 => __DIR__ . '/..' . '/jeremeamia/superclosure/src',
        ),
        'SmashBalloon\\Reviews\\Vendor\\Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'SmashBalloon\\Reviews\\Vendor\\PhpParser\\' => 
        array (
            0 => __DIR__ . '/..' . '/nikic/php-parser/lib/PhpParser',
        ),
        'SmashBalloon\\Reviews\\Vendor\\PhpDocReader\\' => 
        array (
            0 => __DIR__ . '/..' . '/php-di/phpdoc-reader/src/PhpDocReader',
        ),
        'SmashBalloon\\Reviews\\Vendor\\Invoker\\' => 
        array (
            0 => __DIR__ . '/..' . '/php-di/invoker/src',
        ),
        'SmashBalloon\\Reviews\\Vendor\\DI\\' => 
        array (
            0 => __DIR__ . '/..' . '/php-di/php-di/src',
        ),
        'SmashBalloon\\Reviews\\' => 
        array (
            0 => __DIR__ . '/../..' . '/class',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita87b441ef0ec09de95e76d0b1f524cff::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita87b441ef0ec09de95e76d0b1f524cff::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita87b441ef0ec09de95e76d0b1f524cff::$classMap;

        }, null, ClassLoader::class);
    }
}
