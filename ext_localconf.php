<?php

/*
 * This file is part of the package ku_scroll_indicator.
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

defined('TYPO3') or die('Access denied.');

// PageTS

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
    @import \'EXT:ku_scroll_indicator/Configuration/TsConfig/Page/All.tsconfig\'
');
