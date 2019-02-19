#!/usr/bin/env python3

import bz2
import glob
import gzip
import os
import os.path
import lzma as xz
import requests
import shutil
import sys
import zipfile

ALL_SETS_OUTPUT: str = "AllSets.json"
ALL_CARDS_OUTPUT: str = "AllCards.json"
SET_LIST_OUTPUT: str = "SetList.json"
COMPILED_LIST_OUTPUT: str = "CompiledList.json"
KEY_WORDS_OUTPUT: str = "Keywords.json"
VERSION_OUTPUT: str = "version.json"
STANDARD_OUTPUT: str = "Standard.json"
MODERN_OUTPUT: str = "Modern.json"
VINTAGE_OUTPUT: str = "Vintage.json"
REFERRAL_DB_OUTPUT: str = "ReferralMap.json"
ALL_SETS_DIR_OUTPUT: str = "AllSetFiles.json"
CARD_TYPES_OUTPUT: str = "CardTypes.json"

files_to_ignore = [
    ALL_SETS_OUTPUT,
    ALL_CARDS_OUTPUT,
    SET_LIST_OUTPUT,
    COMPILED_LIST_OUTPUT,
    KEY_WORDS_OUTPUT,
    VERSION_OUTPUT,
    STANDARD_OUTPUT,
    MODERN_OUTPUT,
    VINTAGE_OUTPUT,
    REFERRAL_DB_OUTPUT,
    ALL_SETS_DIR_OUTPUT,
    CARD_TYPES_OUTPUT,
]


def file_endings(source_dir, ending):
    for f in glob.glob(os.path.join(source_dir, "*")):
        if f.endswith(ending) and (os.path.basename(f) not in files_to_ignore):
            yield f


def compress_single_sets(source_dir):
    for f in file_endings(source_dir, ".json"):
        file_root = os.path.splitext(f)[0]

        # .ZIP
        zip_file_name = file_root + ".json.zip"
        zip_out = zipfile.ZipFile(zip_file_name, "w")
        zip_out.write(
            f, compress_type=zipfile.ZIP_DEFLATED, arcname=os.path.basename(f)
        )
        zip_out.close()

        # .GZ
        gz_file_name = file_root + ".json.gz"
        gz_file_path = os.path.join(source_dir, gz_file_name)
        with open(f, "rb") as f_in, gzip.open(gz_file_path, "wb") as f_out:
            f_out.writelines(f_in)

        # .BZ2
        bz_file_name = file_root + ".json.bz2"
        bz_file_path = os.path.join(source_dir, bz_file_name)
        with open(f, "rb") as f_in, open(bz_file_path, "wb") as f_out:
            f_out.write(bz2.compress(f_in.read()))

        # .XZ
        xz_file_name = file_root + ".json.xz"
        xz_file_path = os.path.join(source_dir, xz_file_name)
        with open(f, "rb") as f_in, open(xz_file_path, "wb") as f_out:
            f_out.write(xz.compress(f_in.read()))

        print("Compressed " + os.path.basename(f))


def compress_all_set_files(source_dir):
    all_set_files_name = "AllSetFiles"

    # Make directory of stuff to compress
    os.makedirs(all_set_files_name)

    # Copy stuff to compress
    for f in file_endings(source_dir, ".json"):
        try:
            shutil.copy(os.path.join(source_dir, f), all_set_files_name)
        except FileNotFoundError:
            pass

    # Compress the archives
    shutil.make_archive(all_set_files_name, "bztar", all_set_files_name)
    shutil.make_archive(all_set_files_name, "gztar", all_set_files_name)
    shutil.make_archive(all_set_files_name, "xztar", all_set_files_name)
    shutil.make_archive(all_set_files_name, "zip", all_set_files_name)

    # Delete the copied folder
    shutil.rmtree(all_set_files_name, ignore_errors=True)

    print("Compressed " + all_set_files_name)


def main():
    # Setup into correct directory
    source_dir = os.path.join(os.getcwd(), sys.argv[1])
    os.chdir(source_dir)

    # Compress the system
    compress_all_set_files(".")
    compress_single_sets(".")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: " + sys.argv[0] + " <json_directory>")
        sys.exit()
    main()
