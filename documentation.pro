INCLUDEPATH += \
$$PWD \

documentation.commands = "qcollectiongenerator embroidermodder2.qhcp; assistant -collectionFile embroidermodder2.qhc -showUrl qthelp://embroidermodder2/doc/doc-index.html -hide search -hide bookmarks;"
documentation.depends = 

QMAKE_EXTRA_TARGETS += documentation
