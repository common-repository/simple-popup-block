<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitdbcdbdbb22cb7f5352ef54aa9f971d77
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitdbcdbdbb22cb7f5352ef54aa9f971d77', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitdbcdbdbb22cb7f5352ef54aa9f971d77', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitdbcdbdbb22cb7f5352ef54aa9f971d77::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
